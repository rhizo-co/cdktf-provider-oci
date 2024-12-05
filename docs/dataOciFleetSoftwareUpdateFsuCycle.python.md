# `dataOciFleetSoftwareUpdateFsuCycle` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCycle` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCycle <a name="DataOciFleetSoftwareUpdateFsuCycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle oci_fleet_software_update_fsu_cycle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fsu_cycle_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.fsuCycleId">fsu_cycle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fsu_cycle_id`<sup>Required</sup> <a name="fsu_cycle_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.Initializer.parameter.fsuCycleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycle to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetSoftwareUpdateFsuCycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.applyActionSchedule">apply_action_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.batchingStrategy">batching_strategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.collectionType">collection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.diagnosticsCollection">diagnostics_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.executingFsuActionId">executing_fsu_action_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCollectionId">fsu_collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.goalVersionDetails">goal_version_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches">is_ignore_missing_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnorePatches">is_ignore_patches</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isKeepPlacement">is_keep_placement</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lastCompletedAction">last_completed_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds">max_drain_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.nextActionToExecute">next_action_to_execute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.stageActionSchedule">stage_action_schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleIdInput">fsu_cycle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleId">fsu_cycle_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `apply_action_schedule`<sup>Required</sup> <a name="apply_action_schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.applyActionSchedule"></a>

```python
apply_action_schedule: DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList</a>

---

##### `batching_strategy`<sup>Required</sup> <a name="batching_strategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.batchingStrategy"></a>

```python
batching_strategy: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList</a>

---

##### `collection_type`<sup>Required</sup> <a name="collection_type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.collectionType"></a>

```python
collection_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `diagnostics_collection`<sup>Required</sup> <a name="diagnostics_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.diagnosticsCollection"></a>

```python
diagnostics_collection: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `executing_fsu_action_id`<sup>Required</sup> <a name="executing_fsu_action_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.executingFsuActionId"></a>

```python
executing_fsu_action_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `fsu_collection_id`<sup>Required</sup> <a name="fsu_collection_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCollectionId"></a>

```python
fsu_collection_id: str
```

- *Type:* str

---

##### `goal_version_details`<sup>Required</sup> <a name="goal_version_details" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.goalVersionDetails"></a>

```python
goal_version_details: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_ignore_missing_patches`<sup>Required</sup> <a name="is_ignore_missing_patches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnoreMissingPatches"></a>

```python
is_ignore_missing_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_ignore_patches`<sup>Required</sup> <a name="is_ignore_patches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isIgnorePatches"></a>

```python
is_ignore_patches: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_keep_placement`<sup>Required</sup> <a name="is_keep_placement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.isKeepPlacement"></a>

```python
is_keep_placement: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_completed_action`<sup>Required</sup> <a name="last_completed_action" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lastCompletedAction"></a>

```python
last_completed_action: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `max_drain_timeout_in_seconds`<sup>Required</sup> <a name="max_drain_timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.maxDrainTimeoutInSeconds"></a>

```python
max_drain_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `next_action_to_execute`<sup>Required</sup> <a name="next_action_to_execute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.nextActionToExecute"></a>

```python
next_action_to_execute: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList</a>

---

##### `stage_action_schedule`<sup>Required</sup> <a name="stage_action_schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.stageActionSchedule"></a>

```python
stage_action_schedule: DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `fsu_cycle_id_input`<sup>Optional</sup> <a name="fsu_cycle_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleIdInput"></a>

```python
fsu_cycle_id_input: str
```

- *Type:* str

---

##### `fsu_cycle_id`<sup>Required</sup> <a name="fsu_cycle_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.fsuCycleId"></a>

```python
fsu_cycle_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycle.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule()
```


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy()
```


### DataOciFleetSoftwareUpdateFsuCycleConfig <a name="DataOciFleetSoftwareUpdateFsuCycleConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fsu_cycle_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.fsuCycleId">fsu_cycle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fsu_cycle_id`<sup>Required</sup> <a name="fsu_cycle_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleConfig.property.fsuCycleId"></a>

```python
fsu_cycle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycle#fsu_cycle_id DataOciFleetSoftwareUpdateFsuCycle#fsu_cycle_id}.

---

### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection()
```


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails()
```


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute()
```


### DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart">time_to_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_to_start`<sup>Required</sup> <a name="time_to_start" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.timeToStart"></a>

```python
time_to_start: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCycleApplyActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling">is_force_rolling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume">is_wait_for_batch_resume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage">percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_force_rolling`<sup>Required</sup> <a name="is_force_rolling" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isForceRolling"></a>

```python
is_force_rolling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_wait_for_batch_resume`<sup>Required</sup> <a name="is_wait_for_batch_resume" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```python
is_wait_for_batch_resume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.percentage"></a>

```python
percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy">DataOciFleetSoftwareUpdateFsuCycleBatchingStrategy</a>

---


### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode">log_collection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_collection_mode`<sup>Required</sup> <a name="log_collection_mode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```python
log_collection_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCycleDiagnosticsCollection</a>

---


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy">home_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix">new_home_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId">software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `home_policy`<sup>Required</sup> <a name="home_policy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.homePolicy"></a>

```python
home_policy: str
```

- *Type:* str

---

##### `new_home_prefix`<sup>Required</sup> <a name="new_home_prefix" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```python
new_home_prefix: str
```

- *Type:* str

---

##### `software_image_id`<sup>Required</sup> <a name="software_image_id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```python
software_image_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCycleGoalVersionDetails</a>

---


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart">time_to_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_to_start`<sup>Required</sup> <a name="time_to_start" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.timeToStart"></a>

```python
time_to_start: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecuteOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute">DataOciFleetSoftwareUpdateFsuCycleNextActionToExecute</a>

---


### DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_software_update_fsu_cycle

dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart">time_to_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule">DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `time_to_start`<sup>Required</sup> <a name="time_to_start" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.timeToStart"></a>

```python
time_to_start: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycle.DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule">DataOciFleetSoftwareUpdateFsuCycleStageActionSchedule</a>

---



