# `dataOciDelegateAccessControlDelegationControl` Submodule <a name="`dataOciDelegateAccessControlDelegationControl` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegationControl <a name="DataOciDelegateAccessControlDelegationControl" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control oci_delegate_access_control_delegation_control}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegation_control_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.delegationControlId">delegation_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.Initializer.parameter.delegationControlId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegationControl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegationControl to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegationControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegationControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationSubscriptionIds">delegation_subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance">is_auto_approve_during_maintenance</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationMessageFormat">notification_message_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationTopicId">notification_topic_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.numApprovalsRequired">num_approvals_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames">pre_approved_service_provider_action_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeDeleted">time_deleted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultKeyId">vault_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlIdInput">delegation_control_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delegation_subscription_ids`<sup>Required</sup> <a name="delegation_subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationSubscriptionIds"></a>

```python
delegation_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_approve_during_maintenance`<sup>Required</sup> <a name="is_auto_approve_during_maintenance" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.isAutoApproveDuringMaintenance"></a>

```python
is_auto_approve_during_maintenance: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `notification_message_format`<sup>Required</sup> <a name="notification_message_format" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationMessageFormat"></a>

```python
notification_message_format: str
```

- *Type:* str

---

##### `notification_topic_id`<sup>Required</sup> <a name="notification_topic_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.notificationTopicId"></a>

```python
notification_topic_id: str
```

- *Type:* str

---

##### `num_approvals_required`<sup>Required</sup> <a name="num_approvals_required" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.numApprovalsRequired"></a>

```python
num_approvals_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pre_approved_service_provider_action_names`<sup>Required</sup> <a name="pre_approved_service_provider_action_names" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.preApprovedServiceProviderActionNames"></a>

```python
pre_approved_service_provider_action_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_deleted`<sup>Required</sup> <a name="time_deleted" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeDeleted"></a>

```python
time_deleted: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `vault_key_id`<sup>Required</sup> <a name="vault_key_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.vaultKeyId"></a>

```python
vault_key_id: str
```

- *Type:* str

---

##### `delegation_control_id_input`<sup>Optional</sup> <a name="delegation_control_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlIdInput"></a>

```python
delegation_control_id_input: str
```

- *Type:* str

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegationControlConfig <a name="DataOciDelegateAccessControlDelegationControlConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegation_control

dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegation_control_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegationControl.DataOciDelegateAccessControlDelegationControlConfig.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegation_control#delegation_control_id DataOciDelegateAccessControlDelegationControl#delegation_control_id}.

---


