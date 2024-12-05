# `dataOciFleetAppsManagementSchedulerDefinition` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinition <a name="DataOciFleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scheduler_definition_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.schedulerDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinition to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups">action_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes">action_group_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">activity_initiation_cut_off</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes">application_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">count_of_affected_action_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">count_of_affected_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">count_of_affected_targets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations">lifecycle_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks">run_books</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun">time_of_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput">scheduler_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```python
action_groups: DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `action_group_types`<sup>Required</sup> <a name="action_group_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```python
action_group_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `activity_initiation_cut_off`<sup>Required</sup> <a name="activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```python
activity_initiation_cut_off: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_types`<sup>Required</sup> <a name="application_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```python
application_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `count_of_affected_action_groups`<sup>Required</sup> <a name="count_of_affected_action_groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```python
count_of_affected_action_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_resources`<sup>Required</sup> <a name="count_of_affected_resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```python
count_of_affected_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_targets`<sup>Required</sup> <a name="count_of_affected_targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```python
count_of_affected_targets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_operations`<sup>Required</sup> <a name="lifecycle_operations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```python
lifecycle_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `run_books`<sup>Required</sup> <a name="run_books" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```python
run_books: DataOciFleetAppsManagementSchedulerDefinitionRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule"></a>

```python
schedule: DataOciFleetAppsManagementSchedulerDefinitionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_next_run`<sup>Required</sup> <a name="time_of_next_run" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```python
time_of_next_run: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `scheduler_definition_id_input`<sup>Optional</sup> <a name="scheduler_definition_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput"></a>

```python
scheduler_definition_id_input: str
```

- *Type:* str

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId"></a>

```python
scheduler_definition_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups()
```


### DataOciFleetAppsManagementSchedulerDefinitionConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scheduler_definition_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId"></a>

```python
scheduler_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}.

---

### DataOciFleetAppsManagementSchedulerDefinitionRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks()
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters()
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments()
```


### DataOciFleetAppsManagementSchedulerDefinitionSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">lifecycle_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">subjects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `lifecycle_operation`<sup>Required</sup> <a name="lifecycle_operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```python
lifecycle_operation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```python
subjects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionActionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```python
arguments: DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">input_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```python
input_parameters: DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionRunBooks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition

dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">execution_startdate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `execution_startdate`<sup>Required</sup> <a name="execution_startdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```python
execution_startdate: str
```

- *Type:* str

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a>

---



