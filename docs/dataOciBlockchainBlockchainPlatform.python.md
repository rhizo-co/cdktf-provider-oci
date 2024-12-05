# `dataOciBlockchainBlockchainPlatform` Submodule <a name="`dataOciBlockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatform <a name="DataOciBlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_platform_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.blockchainPlatformId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatform to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciBlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText">ca_cert_archive_text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails">component_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape">compute_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId">federated_user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">host_ocpu_utilization_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol">is_byol</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd">is_multi_ad</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape">load_balancer_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole">platform_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType">platform_shape_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion">platform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint">service_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion">service_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs">storage_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs">storage_used_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity">total_ocpu_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput">blockchain_platform_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ca_cert_archive_text`<sup>Required</sup> <a name="ca_cert_archive_text" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```python
ca_cert_archive_text: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `component_details`<sup>Required</sup> <a name="component_details" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails"></a>

```python
component_details: DataOciBlockchainBlockchainPlatformComponentDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `compute_shape`<sup>Required</sup> <a name="compute_shape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape"></a>

```python
compute_shape: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `federated_user_id`<sup>Required</sup> <a name="federated_user_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId"></a>

```python
federated_user_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_ocpu_utilization_info`<sup>Required</sup> <a name="host_ocpu_utilization_info" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```python
host_ocpu_utilization_info: DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `is_byol`<sup>Required</sup> <a name="is_byol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol"></a>

```python
is_byol: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_multi_ad`<sup>Required</sup> <a name="is_multi_ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd"></a>

```python
is_multi_ad: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `load_balancer_shape`<sup>Required</sup> <a name="load_balancer_shape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```python
load_balancer_shape: str
```

- *Type:* str

---

##### `platform_role`<sup>Required</sup> <a name="platform_role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole"></a>

```python
platform_role: str
```

- *Type:* str

---

##### `platform_shape_type`<sup>Required</sup> <a name="platform_shape_type" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType"></a>

```python
platform_shape_type: str
```

- *Type:* str

---

##### `platform_version`<sup>Required</sup> <a name="platform_version" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion"></a>

```python
platform_version: str
```

- *Type:* str

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas"></a>

```python
replicas: DataOciBlockchainBlockchainPlatformReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a>

---

##### `service_endpoint`<sup>Required</sup> <a name="service_endpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```python
service_endpoint: str
```

- *Type:* str

---

##### `service_version`<sup>Required</sup> <a name="service_version" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion"></a>

```python
service_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_size_in_tbs`<sup>Required</sup> <a name="storage_size_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```python
storage_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_used_in_tbs`<sup>Required</sup> <a name="storage_used_in_tbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```python
storage_used_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `total_ocpu_capacity`<sup>Required</sup> <a name="total_ocpu_capacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```python
total_ocpu_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `blockchain_platform_id_input`<sup>Optional</sup> <a name="blockchain_platform_id_input" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput"></a>

```python
blockchain_platform_id_input: str
```

- *Type:* str

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId"></a>

```python
blockchain_platform_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformComponentDetails <a name="DataOciBlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails()
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns()
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam()
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers()
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam()
```


### DataOciBlockchainBlockchainPlatformConfig <a name="DataOciBlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blockchain_platform_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId">blockchain_platform_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blockchain_platform_id`<sup>Required</sup> <a name="blockchain_platform_id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId"></a>

```python
blockchain_platform_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}.

---

### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo()
```


### DataOciBlockchainBlockchainPlatformReplicas <a name="DataOciBlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">osn_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osn_key`<sup>Required</sup> <a name="osn_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```python
osn_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformComponentDetailsOsns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```python
osns: DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```python
peers: DataOciBlockchainBlockchainPlatformComponentDetailsPeersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformComponentDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpu_allocation_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ocpu_allocation_number`<sup>Required</sup> <a name="ocpu_allocation_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```python
ocpu_allocation_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpu_allocation_param</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">peer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_allocation_param`<sup>Required</sup> <a name="ocpu_allocation_param" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```python
ocpu_allocation_param: DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peer_key`<sup>Required</sup> <a name="peer_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```python
peer_key: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformComponentDetailsPeers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpu_capacity_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpu_utilization_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `ocpu_capacity_number`<sup>Required</sup> <a name="ocpu_capacity_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```python
ocpu_capacity_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpu_utilization_number`<sup>Required</sup> <a name="ocpu_utilization_number" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```python
ocpu_utilization_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformReplicasList <a name="DataOciBlockchainBlockchainPlatformReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciBlockchainBlockchainPlatformReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciBlockchainBlockchainPlatformReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_blockchain_blockchain_platform

dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount">ca_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">console_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">proxy_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_count`<sup>Required</sup> <a name="ca_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```python
ca_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `console_count`<sup>Required</sup> <a name="console_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```python
console_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `proxy_count`<sup>Required</sup> <a name="proxy_count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```python
proxy_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```python
internal_value: DataOciBlockchainBlockchainPlatformReplicas
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a>

---



