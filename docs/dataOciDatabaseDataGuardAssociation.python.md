# `dataOciDatabaseDataGuardAssociation` Submodule <a name="`dataOciDatabaseDataGuardAssociation` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDataGuardAssociation <a name="DataOciDatabaseDataGuardAssociation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association oci_database_data_guard_association}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  data_guard_association_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.dataGuardAssociationId">data_guard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}.

---

##### `data_guard_association_id`<sup>Required</sup> <a name="data_guard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.Initializer.parameter.dataGuardAssociationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseDataGuardAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseDataGuardAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseDataGuardAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDataGuardAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyLag">apply_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyRate">apply_rate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.createAsync">create_async</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseAdminPassword">database_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseDefinedTags">database_defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseFreeformTags">database_freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationDataCollectionOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemDefinedTags">db_system_defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemFreeformTags">db_system_freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemSecurityAttributes">db_system_security_attributes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete">delete_standby_db_home_on_delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.isActiveDataGuardEnabled">is_active_data_guard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDatabaseId">peer_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDataGuardAssociationId">peer_data_guard_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbHomeId">peer_db_home_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbSystemId">peer_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbUniqueName">peer_db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerRole">peer_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerSidPrefix">peer_sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerVmClusterId">peer_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.storageVolumePerformanceMode">storage_volume_performance_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.transportType">transport_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationIdInput">data_guard_association_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationId">data_guard_association_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `apply_lag`<sup>Required</sup> <a name="apply_lag" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyLag"></a>

```python
apply_lag: str
```

- *Type:* str

---

##### `apply_rate`<sup>Required</sup> <a name="apply_rate" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.applyRate"></a>

```python
apply_rate: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.createAsync"></a>

```python
create_async: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `database_admin_password`<sup>Required</sup> <a name="database_admin_password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseAdminPassword"></a>

```python
database_admin_password: str
```

- *Type:* str

---

##### `database_defined_tags`<sup>Required</sup> <a name="database_defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseDefinedTags"></a>

```python
database_defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `database_freeform_tags`<sup>Required</sup> <a name="database_freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseFreeformTags"></a>

```python
database_freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataCollectionOptions"></a>

```python
data_collection_options: DataOciDatabaseDataGuardAssociationDataCollectionOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList">DataOciDatabaseDataGuardAssociationDataCollectionOptionsList</a>

---

##### `db_system_defined_tags`<sup>Required</sup> <a name="db_system_defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemDefinedTags"></a>

```python
db_system_defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `db_system_freeform_tags`<sup>Required</sup> <a name="db_system_freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemFreeformTags"></a>

```python
db_system_freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `db_system_security_attributes`<sup>Required</sup> <a name="db_system_security_attributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dbSystemSecurityAttributes"></a>

```python
db_system_security_attributes: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delete_standby_db_home_on_delete`<sup>Required</sup> <a name="delete_standby_db_home_on_delete" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.deleteStandbyDbHomeOnDelete"></a>

```python
delete_standby_db_home_on_delete: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_active_data_guard_enabled`<sup>Required</sup> <a name="is_active_data_guard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.isActiveDataGuardEnabled"></a>

```python
is_active_data_guard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `peer_database_id`<sup>Required</sup> <a name="peer_database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDatabaseId"></a>

```python
peer_database_id: str
```

- *Type:* str

---

##### `peer_data_guard_association_id`<sup>Required</sup> <a name="peer_data_guard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDataGuardAssociationId"></a>

```python
peer_data_guard_association_id: str
```

- *Type:* str

---

##### `peer_db_home_id`<sup>Required</sup> <a name="peer_db_home_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbHomeId"></a>

```python
peer_db_home_id: str
```

- *Type:* str

---

##### `peer_db_system_id`<sup>Required</sup> <a name="peer_db_system_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbSystemId"></a>

```python
peer_db_system_id: str
```

- *Type:* str

---

##### `peer_db_unique_name`<sup>Required</sup> <a name="peer_db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerDbUniqueName"></a>

```python
peer_db_unique_name: str
```

- *Type:* str

---

##### `peer_role`<sup>Required</sup> <a name="peer_role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerRole"></a>

```python
peer_role: str
```

- *Type:* str

---

##### `peer_sid_prefix`<sup>Required</sup> <a name="peer_sid_prefix" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerSidPrefix"></a>

```python
peer_sid_prefix: str
```

- *Type:* str

---

##### `peer_vm_cluster_id`<sup>Required</sup> <a name="peer_vm_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.peerVmClusterId"></a>

```python
peer_vm_cluster_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_volume_performance_mode`<sup>Required</sup> <a name="storage_volume_performance_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.storageVolumePerformanceMode"></a>

```python
storage_volume_performance_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `transport_type`<sup>Required</sup> <a name="transport_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.transportType"></a>

```python
transport_type: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `data_guard_association_id_input`<sup>Optional</sup> <a name="data_guard_association_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationIdInput"></a>

```python
data_guard_association_id_input: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `data_guard_association_id`<sup>Required</sup> <a name="data_guard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.dataGuardAssociationId"></a>

```python
data_guard_association_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDataGuardAssociationConfig <a name="DataOciDatabaseDataGuardAssociationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_id: str,
  data_guard_association_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dataGuardAssociationId">data_guard_association_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#database_id DataOciDatabaseDataGuardAssociation#database_id}.

---

##### `data_guard_association_id`<sup>Required</sup> <a name="data_guard_association_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationConfig.property.dataGuardAssociationId"></a>

```python
data_guard_association_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_data_guard_association#data_guard_association_id DataOciDatabaseDataGuardAssociation#data_guard_association_id}.

---

### DataOciDatabaseDataGuardAssociationDataCollectionOptions <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDataGuardAssociationDataCollectionOptionsList <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference <a name="DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_data_guard_association

dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions">DataOciDatabaseDataGuardAssociationDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseDataGuardAssociationDataCollectionOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDataGuardAssociation.DataOciDatabaseDataGuardAssociationDataCollectionOptions">DataOciDatabaseDataGuardAssociationDataCollectionOptions</a>

---



