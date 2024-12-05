# `dataOciOcvpCluster` Submodule <a name="`dataOciOcvpCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpCluster <a name="DataOciOcvpCluster" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster oci_ocvp_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpCluster(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOcvpCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOcvpCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOcvpCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOcvpCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.actualEsxiHostsCount">actual_esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.computeAvailabilityDomain">compute_availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.datastores">datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList">DataOciOcvpClusterDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiHostsCount">esxi_hosts_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiSoftwareVersion">esxi_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialCommitment">initial_commitment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostOcpuCount">initial_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostShapeName">initial_host_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.instanceDisplayNamePrefix">instance_display_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.isShieldedInstanceEnabled">is_shielded_instance_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList">DataOciOcvpClusterNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.sddcId">sddc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.upgradeLicenses">upgrade_licenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList">DataOciOcvpClusterUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vmwareSoftwareVersion">vmware_software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereType">vsphere_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereUpgradeObjects">vsphere_upgrade_objects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList">DataOciOcvpClusterVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.workloadNetworkCidr">workload_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `actual_esxi_hosts_count`<sup>Required</sup> <a name="actual_esxi_hosts_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.actualEsxiHostsCount"></a>

```python
actual_esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compute_availability_domain`<sup>Required</sup> <a name="compute_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.computeAvailabilityDomain"></a>

```python
compute_availability_domain: str
```

- *Type:* str

---

##### `datastores`<sup>Required</sup> <a name="datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.datastores"></a>

```python
datastores: DataOciOcvpClusterDatastoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList">DataOciOcvpClusterDatastoresList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `esxi_hosts_count`<sup>Required</sup> <a name="esxi_hosts_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiHostsCount"></a>

```python
esxi_hosts_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `esxi_software_version`<sup>Required</sup> <a name="esxi_software_version" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.esxiSoftwareVersion"></a>

```python
esxi_software_version: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_commitment`<sup>Required</sup> <a name="initial_commitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialCommitment"></a>

```python
initial_commitment: str
```

- *Type:* str

---

##### `initial_host_ocpu_count`<sup>Required</sup> <a name="initial_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostOcpuCount"></a>

```python
initial_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `initial_host_shape_name`<sup>Required</sup> <a name="initial_host_shape_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.initialHostShapeName"></a>

```python
initial_host_shape_name: str
```

- *Type:* str

---

##### `instance_display_name_prefix`<sup>Required</sup> <a name="instance_display_name_prefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.instanceDisplayNamePrefix"></a>

```python
instance_display_name_prefix: str
```

- *Type:* str

---

##### `is_shielded_instance_enabled`<sup>Required</sup> <a name="is_shielded_instance_enabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.isShieldedInstanceEnabled"></a>

```python
is_shielded_instance_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.networkConfiguration"></a>

```python
network_configuration: DataOciOcvpClusterNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList">DataOciOcvpClusterNetworkConfigurationList</a>

---

##### `sddc_id`<sup>Required</sup> <a name="sddc_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.sddcId"></a>

```python
sddc_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `upgrade_licenses`<sup>Required</sup> <a name="upgrade_licenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.upgradeLicenses"></a>

```python
upgrade_licenses: DataOciOcvpClusterUpgradeLicensesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList">DataOciOcvpClusterUpgradeLicensesList</a>

---

##### `vmware_software_version`<sup>Required</sup> <a name="vmware_software_version" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vmwareSoftwareVersion"></a>

```python
vmware_software_version: str
```

- *Type:* str

---

##### `vsphere_type`<sup>Required</sup> <a name="vsphere_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereType"></a>

```python
vsphere_type: str
```

- *Type:* str

---

##### `vsphere_upgrade_objects`<sup>Required</sup> <a name="vsphere_upgrade_objects" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.vsphereUpgradeObjects"></a>

```python
vsphere_upgrade_objects: DataOciOcvpClusterVsphereUpgradeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList">DataOciOcvpClusterVsphereUpgradeObjectsList</a>

---

##### `workload_network_cidr`<sup>Required</sup> <a name="workload_network_cidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.workloadNetworkCidr"></a>

```python
workload_network_cidr: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpClusterConfig <a name="DataOciOcvpClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterConfig(
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_cluster#cluster_id DataOciOcvpCluster#cluster_id}.

---

### DataOciOcvpClusterDatastores <a name="DataOciOcvpClusterDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterDatastores()
```


### DataOciOcvpClusterNetworkConfiguration <a name="DataOciOcvpClusterNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration()
```


### DataOciOcvpClusterUpgradeLicenses <a name="DataOciOcvpClusterUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses()
```


### DataOciOcvpClusterVsphereUpgradeObjects <a name="DataOciOcvpClusterVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpClusterDatastoresList <a name="DataOciOcvpClusterDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterDatastoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpClusterDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpClusterDatastoresOutputReference <a name="DataOciOcvpClusterDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.blockVolumeIds">block_volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.capacity">capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.datastoreType">datastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores">DataOciOcvpClusterDatastores</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_ids`<sup>Required</sup> <a name="block_volume_ids" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.blockVolumeIds"></a>

```python
block_volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.capacity"></a>

```python
capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datastore_type`<sup>Required</sup> <a name="datastore_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.datastoreType"></a>

```python
datastore_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastoresOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpClusterDatastores
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterDatastores">DataOciOcvpClusterDatastores</a>

---


### DataOciOcvpClusterNetworkConfigurationList <a name="DataOciOcvpClusterNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpClusterNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpClusterNetworkConfigurationOutputReference <a name="DataOciOcvpClusterNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId">hcx_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">nsx_edge_uplink1_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">nsx_edge_uplink2_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">nsx_edge_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId">nsx_vtep_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId">provisioning_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId">provisioning_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId">replication_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId">vmotion_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId">vsan_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId">vsphere_vlan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration">DataOciOcvpClusterNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hcx_vlan_id`<sup>Required</sup> <a name="hcx_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```python
hcx_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_uplink1_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink1_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```python
nsx_edge_uplink1_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_uplink2_vlan_id`<sup>Required</sup> <a name="nsx_edge_uplink2_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```python
nsx_edge_uplink2_vlan_id: str
```

- *Type:* str

---

##### `nsx_edge_vtep_vlan_id`<sup>Required</sup> <a name="nsx_edge_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```python
nsx_edge_vtep_vlan_id: str
```

- *Type:* str

---

##### `nsx_vtep_vlan_id`<sup>Required</sup> <a name="nsx_vtep_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```python
nsx_vtep_vlan_id: str
```

- *Type:* str

---

##### `provisioning_subnet_id`<sup>Required</sup> <a name="provisioning_subnet_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```python
provisioning_subnet_id: str
```

- *Type:* str

---

##### `provisioning_vlan_id`<sup>Required</sup> <a name="provisioning_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```python
provisioning_vlan_id: str
```

- *Type:* str

---

##### `replication_vlan_id`<sup>Required</sup> <a name="replication_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```python
replication_vlan_id: str
```

- *Type:* str

---

##### `vmotion_vlan_id`<sup>Required</sup> <a name="vmotion_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```python
vmotion_vlan_id: str
```

- *Type:* str

---

##### `vsan_vlan_id`<sup>Required</sup> <a name="vsan_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```python
vsan_vlan_id: str
```

- *Type:* str

---

##### `vsphere_vlan_id`<sup>Required</sup> <a name="vsphere_vlan_id" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```python
vsphere_vlan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpClusterNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterNetworkConfiguration">DataOciOcvpClusterNetworkConfiguration</a>

---


### DataOciOcvpClusterUpgradeLicensesList <a name="DataOciOcvpClusterUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpClusterUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpClusterUpgradeLicensesOutputReference <a name="DataOciOcvpClusterUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseKey">license_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses">DataOciOcvpClusterUpgradeLicenses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_key`<sup>Required</sup> <a name="license_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseKey"></a>

```python
license_key: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicensesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpClusterUpgradeLicenses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterUpgradeLicenses">DataOciOcvpClusterUpgradeLicenses</a>

---


### DataOciOcvpClusterVsphereUpgradeObjectsList <a name="DataOciOcvpClusterVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOcvpClusterVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOcvpClusterVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpClusterVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ocvp_cluster

dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink">download_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription">link_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects">DataOciOcvpClusterVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `download_link`<sup>Required</sup> <a name="download_link" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```python
download_link: str
```

- *Type:* str

---

##### `link_description`<sup>Required</sup> <a name="link_description" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```python
link_description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOcvpClusterVsphereUpgradeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpCluster.DataOciOcvpClusterVsphereUpgradeObjects">DataOciOcvpClusterVsphereUpgradeObjects</a>

---



