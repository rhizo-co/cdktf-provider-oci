# `dataOciOsManagementHubSoftwareSource` Submodule <a name="`dataOciOsManagementHubSoftwareSource` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSource <a name="DataOciOsManagementHubSoftwareSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source oci_os_management_hub_software_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source#software_source_id DataOciOsManagementHubSoftwareSource#software_source_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.Initializer.parameter.softwareSourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source#software_source_id DataOciOsManagementHubSoftwareSource#software_source_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsManagementHubSoftwareSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.archType">arch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.availability">availability</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.availabilityAtOci">availability_at_oci</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.checksumType">checksum_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.customSoftwareSourceFilter">custom_software_source_filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyFingerprint">gpg_key_fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyId">gpg_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyUrl">gpg_key_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isAutomaticallyUpdated">is_automatically_updated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isAutoResolveDependencies">is_auto_resolve_dependencies</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isCreatedFromPackageList">is_created_from_package_list</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isLatestContentOnly">is_latest_content_only</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isMandatoryForAutonomousLinux">is_mandatory_for_autonomous_linux</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.originSoftwareSourceId">origin_software_source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.osFamily">os_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.packageCount">package_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.packages">packages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.repoId">repo_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceType">software_source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceVersion">software_source_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.vendorName">vendor_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.vendorSoftwareSources">vendor_software_sources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceIdInput">software_source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arch_type`<sup>Required</sup> <a name="arch_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.archType"></a>

```python
arch_type: str
```

- *Type:* str

---

##### `availability`<sup>Required</sup> <a name="availability" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.availability"></a>

```python
availability: str
```

- *Type:* str

---

##### `availability_at_oci`<sup>Required</sup> <a name="availability_at_oci" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.availabilityAtOci"></a>

```python
availability_at_oci: str
```

- *Type:* str

---

##### `checksum_type`<sup>Required</sup> <a name="checksum_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.checksumType"></a>

```python
checksum_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `custom_software_source_filter`<sup>Required</sup> <a name="custom_software_source_filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.customSoftwareSourceFilter"></a>

```python
custom_software_source_filter: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `gpg_key_fingerprint`<sup>Required</sup> <a name="gpg_key_fingerprint" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyFingerprint"></a>

```python
gpg_key_fingerprint: str
```

- *Type:* str

---

##### `gpg_key_id`<sup>Required</sup> <a name="gpg_key_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyId"></a>

```python
gpg_key_id: str
```

- *Type:* str

---

##### `gpg_key_url`<sup>Required</sup> <a name="gpg_key_url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.gpgKeyUrl"></a>

```python
gpg_key_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_automatically_updated`<sup>Required</sup> <a name="is_automatically_updated" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isAutomaticallyUpdated"></a>

```python
is_automatically_updated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_auto_resolve_dependencies`<sup>Required</sup> <a name="is_auto_resolve_dependencies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isAutoResolveDependencies"></a>

```python
is_auto_resolve_dependencies: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_created_from_package_list`<sup>Required</sup> <a name="is_created_from_package_list" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isCreatedFromPackageList"></a>

```python
is_created_from_package_list: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_latest_content_only`<sup>Required</sup> <a name="is_latest_content_only" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isLatestContentOnly"></a>

```python
is_latest_content_only: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_mandatory_for_autonomous_linux`<sup>Required</sup> <a name="is_mandatory_for_autonomous_linux" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.isMandatoryForAutonomousLinux"></a>

```python
is_mandatory_for_autonomous_linux: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `origin_software_source_id`<sup>Required</sup> <a name="origin_software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.originSoftwareSourceId"></a>

```python
origin_software_source_id: str
```

- *Type:* str

---

##### `os_family`<sup>Required</sup> <a name="os_family" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.osFamily"></a>

```python
os_family: str
```

- *Type:* str

---

##### `package_count`<sup>Required</sup> <a name="package_count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.packageCount"></a>

```python
package_count: str
```

- *Type:* str

---

##### `packages`<sup>Required</sup> <a name="packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.packages"></a>

```python
packages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `repo_id`<sup>Required</sup> <a name="repo_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.repoId"></a>

```python
repo_id: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `software_source_type`<sup>Required</sup> <a name="software_source_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceType"></a>

```python
software_source_type: str
```

- *Type:* str

---

##### `software_source_version`<sup>Required</sup> <a name="software_source_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceVersion"></a>

```python
software_source_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `vendor_name`<sup>Required</sup> <a name="vendor_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.vendorName"></a>

```python
vendor_name: str
```

- *Type:* str

---

##### `vendor_software_sources`<sup>Required</sup> <a name="vendor_software_sources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.vendorSoftwareSources"></a>

```python
vendor_software_sources: DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList">DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList</a>

---

##### `software_source_id_input`<sup>Optional</sup> <a name="software_source_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceIdInput"></a>

```python
software_source_id_input: str
```

- *Type:* str

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceConfig <a name="DataOciOsManagementHubSoftwareSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  software_source_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.softwareSourceId">software_source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source#software_source_id DataOciOsManagementHubSoftwareSource#software_source_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `software_source_id`<sup>Required</sup> <a name="software_source_id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceConfig.property.softwareSourceId"></a>

```python
software_source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source#software_source_id DataOciOsManagementHubSoftwareSource#software_source_id}.

---

### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter()
```


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters()
```


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters()
```


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters()
```


### DataOciOsManagementHubSoftwareSourceVendorSoftwareSources <a name="DataOciOsManagementHubSoftwareSourceVendorSoftwareSources" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSources()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleName">module_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileName">profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamName">stream_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `module_name`<sup>Required</sup> <a name="module_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.moduleName"></a>

```python
module_name: str
```

- *Type:* str

---

##### `profile_name`<sup>Required</sup> <a name="profile_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.profileName"></a>

```python
profile_name: str
```

- *Type:* str

---

##### `stream_name`<sup>Required</sup> <a name="stream_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.streamName"></a>

```python
stream_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFilters</a>

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFilters">module_stream_profile_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFilters">package_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFilters">package_group_filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `module_stream_profile_filters`<sup>Required</sup> <a name="module_stream_profile_filters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.moduleStreamProfileFilters"></a>

```python
module_stream_profile_filters: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterModuleStreamProfileFiltersList</a>

---

##### `package_filters`<sup>Required</sup> <a name="package_filters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageFilters"></a>

```python
package_filters: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList</a>

---

##### `package_group_filters`<sup>Required</sup> <a name="package_group_filters" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.packageGroupFilters"></a>

```python
package_group_filters: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilter</a>

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageName">package_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePattern">package_name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersion">package_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `package_name`<sup>Required</sup> <a name="package_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageName"></a>

```python
package_name: str
```

- *Type:* str

---

##### `package_name_pattern`<sup>Required</sup> <a name="package_name_pattern" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageNamePattern"></a>

```python
package_name_pattern: str
```

- *Type:* str

---

##### `package_version`<sup>Required</sup> <a name="package_version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.packageVersion"></a>

```python
package_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageFilters</a>

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference <a name="DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterType">filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroups">package_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filter_type`<sup>Required</sup> <a name="filter_type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.filterType"></a>

```python
filter_type: str
```

- *Type:* str

---

##### `package_groups`<sup>Required</sup> <a name="package_groups" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.packageGroups"></a>

```python
package_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFiltersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters">DataOciOsManagementHubSoftwareSourceCustomSoftwareSourceFilterPackageGroupFilters</a>

---


### DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList <a name="DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_os_management_hub_software_source

dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSources">DataOciOsManagementHubSoftwareSourceVendorSoftwareSources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOsManagementHubSoftwareSourceVendorSoftwareSources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSource.DataOciOsManagementHubSoftwareSourceVendorSoftwareSources">DataOciOsManagementHubSoftwareSourceVendorSoftwareSources</a>

---



