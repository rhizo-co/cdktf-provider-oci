# `dataOciPsqlDbSystemConnectionDetail` Submodule <a name="`dataOciPsqlDbSystemConnectionDetail` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDbSystemConnectionDetail <a name="DataOciPsqlDbSystemConnectionDetail" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail oci_psql_db_system_connection_detail}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciPsqlDbSystemConnectionDetail resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciPsqlDbSystemConnectionDetail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciPsqlDbSystemConnectionDetail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDbSystemConnectionDetail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate">ca_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints">instance_endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint">primary_db_endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ca_certificate`<sup>Required</sup> <a name="ca_certificate" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.caCertificate"></a>

```python
ca_certificate: str
```

- *Type:* str

---

##### `instance_endpoints`<sup>Required</sup> <a name="instance_endpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.instanceEndpoints"></a>

```python
instance_endpoints: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList</a>

---

##### `primary_db_endpoint`<sup>Required</sup> <a name="primary_db_endpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.primaryDbEndpoint"></a>

```python
primary_db_endpoint: DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList</a>

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDbSystemConnectionDetailConfig <a name="DataOciPsqlDbSystemConnectionDetailConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#db_system_id DataOciPsqlDbSystemConnectionDetail#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_db_system_connection_detail#id DataOciPsqlDbSystemConnectionDetail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDbSystemConnectionDetailInstanceEndpoints <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpoints" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints()
```


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint()
```


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpoint</a>

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference <a name="DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId">db_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_instance_id`<sup>Required</sup> <a name="db_instance_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.dbInstanceId"></a>

```python
db_instance_id: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.endpoint"></a>

```python
endpoint: DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList">DataOciPsqlDbSystemConnectionDetailInstanceEndpointsEndpointList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemConnectionDetailInstanceEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailInstanceEndpoints">DataOciPsqlDbSystemConnectionDetailInstanceEndpoints</a>

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference <a name="DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_db_system_connection_detail

dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDbSystemConnectionDetail.DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint">DataOciPsqlDbSystemConnectionDetailPrimaryDbEndpoint</a>

---



