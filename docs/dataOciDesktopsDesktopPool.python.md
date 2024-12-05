# `dataOciDesktopsDesktopPool` Submodule <a name="`dataOciDesktopsDesktopPool` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDesktopsDesktopPool <a name="DataOciDesktopsDesktopPool" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool oci_desktops_desktop_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desktop_pool_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.Initializer.parameter.desktopPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDesktopsDesktopPool resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDesktopsDesktopPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDesktopsDesktopPool to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDesktopsDesktopPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDesktopsDesktopPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.activeDesktops">active_desktops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.arePrivilegedUsers">are_privileged_users</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityPolicy">availability_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList">DataOciDesktopsDesktopPoolAvailabilityPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.contactDetails">contact_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.devicePolicy">device_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList">DataOciDesktopsDesktopPoolDevicePolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.image">image</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList">DataOciDesktopsDesktopPoolImageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.isStorageEnabled">is_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.maximumSize">maximum_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList">DataOciDesktopsDesktopPoolNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.privateAccessDetails">private_access_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList">DataOciDesktopsDesktopPoolPrivateAccessDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.sessionLifecycleActions">session_lifecycle_actions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList">DataOciDesktopsDesktopPoolSessionLifecycleActionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeConfig">shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList">DataOciDesktopsDesktopPoolShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.standbySize">standby_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageBackupPolicyId">storage_backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageSizeInGbs">storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStartScheduled">time_start_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStopScheduled">time_stop_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.useDedicatedVmHost">use_dedicated_vm_host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolIdInput">desktop_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active_desktops`<sup>Required</sup> <a name="active_desktops" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.activeDesktops"></a>

```python
active_desktops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `are_privileged_users`<sup>Required</sup> <a name="are_privileged_users" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.arePrivilegedUsers"></a>

```python
are_privileged_users: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `availability_policy`<sup>Required</sup> <a name="availability_policy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.availabilityPolicy"></a>

```python
availability_policy: DataOciDesktopsDesktopPoolAvailabilityPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList">DataOciDesktopsDesktopPoolAvailabilityPolicyList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `contact_details`<sup>Required</sup> <a name="contact_details" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.contactDetails"></a>

```python
contact_details: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_policy`<sup>Required</sup> <a name="device_policy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.devicePolicy"></a>

```python
device_policy: DataOciDesktopsDesktopPoolDevicePolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList">DataOciDesktopsDesktopPoolDevicePolicyList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.image"></a>

```python
image: DataOciDesktopsDesktopPoolImageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList">DataOciDesktopsDesktopPoolImageList</a>

---

##### `is_storage_enabled`<sup>Required</sup> <a name="is_storage_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.isStorageEnabled"></a>

```python
is_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maximum_size`<sup>Required</sup> <a name="maximum_size" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.maximumSize"></a>

```python
maximum_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.networkConfiguration"></a>

```python
network_configuration: DataOciDesktopsDesktopPoolNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList">DataOciDesktopsDesktopPoolNetworkConfigurationList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_access_details`<sup>Required</sup> <a name="private_access_details" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.privateAccessDetails"></a>

```python
private_access_details: DataOciDesktopsDesktopPoolPrivateAccessDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList">DataOciDesktopsDesktopPoolPrivateAccessDetailsList</a>

---

##### `session_lifecycle_actions`<sup>Required</sup> <a name="session_lifecycle_actions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.sessionLifecycleActions"></a>

```python
session_lifecycle_actions: DataOciDesktopsDesktopPoolSessionLifecycleActionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList">DataOciDesktopsDesktopPoolSessionLifecycleActionsList</a>

---

##### `shape_config`<sup>Required</sup> <a name="shape_config" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeConfig"></a>

```python
shape_config: DataOciDesktopsDesktopPoolShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList">DataOciDesktopsDesktopPoolShapeConfigList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `standby_size`<sup>Required</sup> <a name="standby_size" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.standbySize"></a>

```python
standby_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage_backup_policy_id`<sup>Required</sup> <a name="storage_backup_policy_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageBackupPolicyId"></a>

```python
storage_backup_policy_id: str
```

- *Type:* str

---

##### `storage_size_in_gbs`<sup>Required</sup> <a name="storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.storageSizeInGbs"></a>

```python
storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_start_scheduled`<sup>Required</sup> <a name="time_start_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStartScheduled"></a>

```python
time_start_scheduled: str
```

- *Type:* str

---

##### `time_stop_scheduled`<sup>Required</sup> <a name="time_stop_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.timeStopScheduled"></a>

```python
time_stop_scheduled: str
```

- *Type:* str

---

##### `use_dedicated_vm_host`<sup>Required</sup> <a name="use_dedicated_vm_host" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.useDedicatedVmHost"></a>

```python
use_dedicated_vm_host: str
```

- *Type:* str

---

##### `desktop_pool_id_input`<sup>Optional</sup> <a name="desktop_pool_id_input" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolIdInput"></a>

```python
desktop_pool_id_input: str
```

- *Type:* str

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.desktopPoolId"></a>

```python
desktop_pool_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDesktopsDesktopPoolAvailabilityPolicy <a name="DataOciDesktopsDesktopPoolAvailabilityPolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy()
```


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule()
```


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule()
```


### DataOciDesktopsDesktopPoolConfig <a name="DataOciDesktopsDesktopPoolConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desktop_pool_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.desktopPoolId">desktop_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desktop_pool_id`<sup>Required</sup> <a name="desktop_pool_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolConfig.property.desktopPoolId"></a>

```python
desktop_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/desktops_desktop_pool#desktop_pool_id DataOciDesktopsDesktopPool#desktop_pool_id}.

---

### DataOciDesktopsDesktopPoolDevicePolicy <a name="DataOciDesktopsDesktopPoolDevicePolicy" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy()
```


### DataOciDesktopsDesktopPoolImage <a name="DataOciDesktopsDesktopPoolImage" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage()
```


### DataOciDesktopsDesktopPoolNetworkConfiguration <a name="DataOciDesktopsDesktopPoolNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration()
```


### DataOciDesktopsDesktopPoolPrivateAccessDetails <a name="DataOciDesktopsDesktopPoolPrivateAccessDetails" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails()
```


### DataOciDesktopsDesktopPoolSessionLifecycleActions <a name="DataOciDesktopsDesktopPoolSessionLifecycleActions" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions()
```


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect()
```


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity()
```


### DataOciDesktopsDesktopPoolShapeConfig <a name="DataOciDesktopsDesktopPoolShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDesktopsDesktopPoolAvailabilityPolicyList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule">start_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule">stop_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy">DataOciDesktopsDesktopPoolAvailabilityPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `start_schedule`<sup>Required</sup> <a name="start_schedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.startSchedule"></a>

```python
start_schedule: DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList</a>

---

##### `stop_schedule`<sup>Required</sup> <a name="stop_schedule" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.stopSchedule"></a>

```python
stop_schedule: DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList">DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolAvailabilityPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicy">DataOciDesktopsDesktopPoolAvailabilityPolicy</a>

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStartSchedule</a>

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference <a name="DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression">cron_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cron_expression`<sup>Required</sup> <a name="cron_expression" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.cronExpression"></a>

```python
cron_expression: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule">DataOciDesktopsDesktopPoolAvailabilityPolicyStopSchedule</a>

---


### DataOciDesktopsDesktopPoolDevicePolicyList <a name="DataOciDesktopsDesktopPoolDevicePolicyList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolDevicePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolDevicePolicyOutputReference <a name="DataOciDesktopsDesktopPoolDevicePolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode">audio_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode">cdm_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode">clipboard_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled">is_display_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled">is_keyboard_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled">is_pointer_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled">is_printing_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy">DataOciDesktopsDesktopPoolDevicePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audio_mode`<sup>Required</sup> <a name="audio_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.audioMode"></a>

```python
audio_mode: str
```

- *Type:* str

---

##### `cdm_mode`<sup>Required</sup> <a name="cdm_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.cdmMode"></a>

```python
cdm_mode: str
```

- *Type:* str

---

##### `clipboard_mode`<sup>Required</sup> <a name="clipboard_mode" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.clipboardMode"></a>

```python
clipboard_mode: str
```

- *Type:* str

---

##### `is_display_enabled`<sup>Required</sup> <a name="is_display_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isDisplayEnabled"></a>

```python
is_display_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_keyboard_enabled`<sup>Required</sup> <a name="is_keyboard_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isKeyboardEnabled"></a>

```python
is_keyboard_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pointer_enabled`<sup>Required</sup> <a name="is_pointer_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPointerEnabled"></a>

```python
is_pointer_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_printing_enabled`<sup>Required</sup> <a name="is_printing_enabled" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.isPrintingEnabled"></a>

```python
is_printing_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolDevicePolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolDevicePolicy">DataOciDesktopsDesktopPoolDevicePolicy</a>

---


### DataOciDesktopsDesktopPoolImageList <a name="DataOciDesktopsDesktopPoolImageList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolImageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolImageOutputReference <a name="DataOciDesktopsDesktopPoolImageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageName">image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage">DataOciDesktopsDesktopPoolImage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `image_name`<sup>Required</sup> <a name="image_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.imageName"></a>

```python
image_name: str
```

- *Type:* str

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImageOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolImage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolImage">DataOciDesktopsDesktopPoolImage</a>

---


### DataOciDesktopsDesktopPoolNetworkConfigurationList <a name="DataOciDesktopsDesktopPoolNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference <a name="DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration">DataOciDesktopsDesktopPoolNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolNetworkConfiguration">DataOciDesktopsDesktopPoolNetworkConfiguration</a>

---


### DataOciDesktopsDesktopPoolPrivateAccessDetailsList <a name="DataOciDesktopsDesktopPoolPrivateAccessDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference <a name="DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn">endpoint_fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails">DataOciDesktopsDesktopPoolPrivateAccessDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `endpoint_fqdn`<sup>Required</sup> <a name="endpoint_fqdn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.endpointFqdn"></a>

```python
endpoint_fqdn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolPrivateAccessDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolPrivateAccessDetails">DataOciDesktopsDesktopPoolPrivateAccessDetails</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnect</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes">grace_period_in_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `grace_period_in_minutes`<sup>Required</sup> <a name="grace_period_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.gracePeriodInMinutes"></a>

```python
grace_period_in_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivity</a>

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsList <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference <a name="DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect">disconnect</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity">inactivity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions">DataOciDesktopsDesktopPoolSessionLifecycleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disconnect`<sup>Required</sup> <a name="disconnect" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.disconnect"></a>

```python
disconnect: DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList">DataOciDesktopsDesktopPoolSessionLifecycleActionsDisconnectList</a>

---

##### `inactivity`<sup>Required</sup> <a name="inactivity" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.inactivity"></a>

```python
inactivity: DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList">DataOciDesktopsDesktopPoolSessionLifecycleActionsInactivityList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolSessionLifecycleActions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolSessionLifecycleActions">DataOciDesktopsDesktopPoolSessionLifecycleActions</a>

---


### DataOciDesktopsDesktopPoolShapeConfigList <a name="DataOciDesktopsDesktopPoolShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDesktopsDesktopPoolShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDesktopsDesktopPoolShapeConfigOutputReference <a name="DataOciDesktopsDesktopPoolShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_desktops_desktop_pool

dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization">baseline_ocpu_utilization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig">DataOciDesktopsDesktopPoolShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_ocpu_utilization`<sup>Required</sup> <a name="baseline_ocpu_utilization" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.baselineOcpuUtilization"></a>

```python
baseline_ocpu_utilization: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: str
```

- *Type:* str

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDesktopsDesktopPoolShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDesktopsDesktopPool.DataOciDesktopsDesktopPoolShapeConfig">DataOciDesktopsDesktopPoolShapeConfig</a>

---



