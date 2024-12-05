# `dataOciOpensearchOpensearchCluster` Submodule <a name="`dataOciOpensearchOpensearchCluster` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpensearchOpensearchCluster <a name="DataOciOpensearchOpensearchCluster" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster oci_opensearch_opensearch_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  opensearch_cluster_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.opensearchClusterId">opensearch_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opensearch_cluster_id`<sup>Required</sup> <a name="opensearch_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.Initializer.parameter.opensearchClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpensearchOpensearchCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpensearchOpensearchCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpensearchOpensearchCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpensearchOpensearchCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains">availability_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount">data_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape">data_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb">data_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount">data_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType">data_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb">data_node_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount">master_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape">master_node_host_bare_metal_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb">master_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount">master_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType">master_node_host_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn">opendashboard_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount">opendashboard_node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb">opendashboard_node_host_memory_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount">opendashboard_node_host_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp">opendashboard_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn">opensearch_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp">opensearch_private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName">security_master_user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash">security_master_user_password_hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode">security_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion">software_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId">subnet_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb">total_storage_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId">vcn_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput">opensearch_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId">opensearch_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_domains`<sup>Required</sup> <a name="availability_domains" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.availabilityDomains"></a>

```python
availability_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `data_node_count`<sup>Required</sup> <a name="data_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeCount"></a>

```python
data_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_bare_metal_shape`<sup>Required</sup> <a name="data_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostBareMetalShape"></a>

```python
data_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `data_node_host_memory_gb`<sup>Required</sup> <a name="data_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostMemoryGb"></a>

```python
data_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_ocpu_count`<sup>Required</sup> <a name="data_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostOcpuCount"></a>

```python
data_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_node_host_type`<sup>Required</sup> <a name="data_node_host_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeHostType"></a>

```python
data_node_host_type: str
```

- *Type:* str

---

##### `data_node_storage_gb`<sup>Required</sup> <a name="data_node_storage_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.dataNodeStorageGb"></a>

```python
data_node_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `master_node_count`<sup>Required</sup> <a name="master_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeCount"></a>

```python
master_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_bare_metal_shape`<sup>Required</sup> <a name="master_node_host_bare_metal_shape" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostBareMetalShape"></a>

```python
master_node_host_bare_metal_shape: str
```

- *Type:* str

---

##### `master_node_host_memory_gb`<sup>Required</sup> <a name="master_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostMemoryGb"></a>

```python
master_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_ocpu_count`<sup>Required</sup> <a name="master_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostOcpuCount"></a>

```python
master_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `master_node_host_type`<sup>Required</sup> <a name="master_node_host_type" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.masterNodeHostType"></a>

```python
master_node_host_type: str
```

- *Type:* str

---

##### `opendashboard_fqdn`<sup>Required</sup> <a name="opendashboard_fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardFqdn"></a>

```python
opendashboard_fqdn: str
```

- *Type:* str

---

##### `opendashboard_node_count`<sup>Required</sup> <a name="opendashboard_node_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeCount"></a>

```python
opendashboard_node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_memory_gb`<sup>Required</sup> <a name="opendashboard_node_host_memory_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostMemoryGb"></a>

```python
opendashboard_node_host_memory_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_node_host_ocpu_count`<sup>Required</sup> <a name="opendashboard_node_host_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardNodeHostOcpuCount"></a>

```python
opendashboard_node_host_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opendashboard_private_ip`<sup>Required</sup> <a name="opendashboard_private_ip" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opendashboardPrivateIp"></a>

```python
opendashboard_private_ip: str
```

- *Type:* str

---

##### `opensearch_fqdn`<sup>Required</sup> <a name="opensearch_fqdn" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchFqdn"></a>

```python
opensearch_fqdn: str
```

- *Type:* str

---

##### `opensearch_private_ip`<sup>Required</sup> <a name="opensearch_private_ip" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchPrivateIp"></a>

```python
opensearch_private_ip: str
```

- *Type:* str

---

##### `security_master_user_name`<sup>Required</sup> <a name="security_master_user_name" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserName"></a>

```python
security_master_user_name: str
```

- *Type:* str

---

##### `security_master_user_password_hash`<sup>Required</sup> <a name="security_master_user_password_hash" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMasterUserPasswordHash"></a>

```python
security_master_user_password_hash: str
```

- *Type:* str

---

##### `security_mode`<sup>Required</sup> <a name="security_mode" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.securityMode"></a>

```python
security_mode: str
```

- *Type:* str

---

##### `software_version`<sup>Required</sup> <a name="software_version" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.softwareVersion"></a>

```python
software_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_compartment_id`<sup>Required</sup> <a name="subnet_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetCompartmentId"></a>

```python
subnet_compartment_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_storage_gb`<sup>Required</sup> <a name="total_storage_gb" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.totalStorageGb"></a>

```python
total_storage_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcn_compartment_id`<sup>Required</sup> <a name="vcn_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnCompartmentId"></a>

```python
vcn_compartment_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `opensearch_cluster_id_input`<sup>Optional</sup> <a name="opensearch_cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterIdInput"></a>

```python
opensearch_cluster_id_input: str
```

- *Type:* str

---

##### `opensearch_cluster_id`<sup>Required</sup> <a name="opensearch_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.opensearchClusterId"></a>

```python
opensearch_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpensearchOpensearchClusterConfig <a name="DataOciOpensearchOpensearchClusterConfig" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opensearch_opensearch_cluster

dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  opensearch_cluster_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId">opensearch_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `opensearch_cluster_id`<sup>Required</sup> <a name="opensearch_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciOpensearchOpensearchCluster.DataOciOpensearchOpensearchClusterConfig.property.opensearchClusterId"></a>

```python
opensearch_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opensearch_opensearch_cluster#opensearch_cluster_id DataOciOpensearchOpensearchCluster#opensearch_cluster_id}.

---



