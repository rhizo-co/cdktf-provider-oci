# `dataOciObjectstorageReplicationPolicy` Submodule <a name="`dataOciObjectstorageReplicationPolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageReplicationPolicy <a name="DataOciObjectstorageReplicationPolicy" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy oci_objectstorage_replication_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  replication_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#bucket DataOciObjectstorageReplicationPolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#namespace DataOciObjectstorageReplicationPolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.replicationId">replication_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#replication_id DataOciObjectstorageReplicationPolicy#replication_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#bucket DataOciObjectstorageReplicationPolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#namespace DataOciObjectstorageReplicationPolicy#namespace}.

---

##### `replication_id`<sup>Required</sup> <a name="replication_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.Initializer.parameter.replicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#replication_id DataOciObjectstorageReplicationPolicy#replication_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciObjectstorageReplicationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciObjectstorageReplicationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciObjectstorageReplicationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciObjectstorageReplicationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageReplicationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.deleteObjectInDestinationBucket">delete_object_in_destination_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.destinationBucketName">destination_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.destinationRegionName">destination_region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.timeLastSync">time_last_sync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.replicationIdInput">replication_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.replicationId">replication_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `delete_object_in_destination_bucket`<sup>Required</sup> <a name="delete_object_in_destination_bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.deleteObjectInDestinationBucket"></a>

```python
delete_object_in_destination_bucket: str
```

- *Type:* str

---

##### `destination_bucket_name`<sup>Required</sup> <a name="destination_bucket_name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.destinationBucketName"></a>

```python
destination_bucket_name: str
```

- *Type:* str

---

##### `destination_region_name`<sup>Required</sup> <a name="destination_region_name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.destinationRegionName"></a>

```python
destination_region_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_sync`<sup>Required</sup> <a name="time_last_sync" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.timeLastSync"></a>

```python
time_last_sync: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `replication_id_input`<sup>Optional</sup> <a name="replication_id_input" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.replicationIdInput"></a>

```python
replication_id_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `replication_id`<sup>Required</sup> <a name="replication_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.replicationId"></a>

```python
replication_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageReplicationPolicyConfig <a name="DataOciObjectstorageReplicationPolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_objectstorage_replication_policy

dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  namespace: str,
  replication_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#bucket DataOciObjectstorageReplicationPolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#namespace DataOciObjectstorageReplicationPolicy#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.replicationId">replication_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#replication_id DataOciObjectstorageReplicationPolicy#replication_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#bucket DataOciObjectstorageReplicationPolicy#bucket}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#namespace DataOciObjectstorageReplicationPolicy#namespace}.

---

##### `replication_id`<sup>Required</sup> <a name="replication_id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageReplicationPolicy.DataOciObjectstorageReplicationPolicyConfig.property.replicationId"></a>

```python
replication_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_replication_policy#replication_id DataOciObjectstorageReplicationPolicy#replication_id}.

---


