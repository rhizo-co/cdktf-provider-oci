# `dataOciEmailEmailReturnPath` Submodule <a name="`dataOciEmailEmailReturnPath` Submodule" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciEmailEmailReturnPath <a name="DataOciEmailEmailReturnPath" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path oci_email_email_return_path}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_return_path_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.emailReturnPathId">email_return_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path#email_return_path_id DataOciEmailEmailReturnPath#email_return_path_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_return_path_id`<sup>Required</sup> <a name="email_return_path_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.Initializer.parameter.emailReturnPathId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path#email_return_path_id DataOciEmailEmailReturnPath#email_return_path_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciEmailEmailReturnPath resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciEmailEmailReturnPath resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciEmailEmailReturnPath to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciEmailEmailReturnPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciEmailEmailReturnPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.cnameRecordValue">cname_record_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.dnsSubdomainName">dns_subdomain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.parentResourceId">parent_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.emailReturnPathIdInput">email_return_path_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.emailReturnPathId">email_return_path_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `cname_record_value`<sup>Required</sup> <a name="cname_record_value" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.cnameRecordValue"></a>

```python
cname_record_value: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dns_subdomain_name`<sup>Required</sup> <a name="dns_subdomain_name" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.dnsSubdomainName"></a>

```python
dns_subdomain_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_resource_id`<sup>Required</sup> <a name="parent_resource_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.parentResourceId"></a>

```python
parent_resource_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `email_return_path_id_input`<sup>Optional</sup> <a name="email_return_path_id_input" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.emailReturnPathIdInput"></a>

```python
email_return_path_id_input: str
```

- *Type:* str

---

##### `email_return_path_id`<sup>Required</sup> <a name="email_return_path_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.emailReturnPathId"></a>

```python
email_return_path_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPath.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciEmailEmailReturnPathConfig <a name="DataOciEmailEmailReturnPathConfig" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_email_email_return_path

dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email_return_path_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.emailReturnPathId">email_return_path_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path#email_return_path_id DataOciEmailEmailReturnPath#email_return_path_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email_return_path_id`<sup>Required</sup> <a name="email_return_path_id" id="rhizo-co-terraform-provider-oci.dataOciEmailEmailReturnPath.DataOciEmailEmailReturnPathConfig.property.emailReturnPathId"></a>

```python
email_return_path_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/email_email_return_path#email_return_path_id DataOciEmailEmailReturnPath#email_return_path_id}.

---


