# `dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets oci_fleet_apps_management_scheduler_definition_scheduled_fleets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scheduler_definition_id: str,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.schedulerDefinitionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#filter DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection">scheduled_fleet_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput">scheduler_definition_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filter"></a>

```python
filter: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList</a>

---

##### `scheduled_fleet_collection`<sup>Required</sup> <a name="scheduled_fleet_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.scheduledFleetCollection"></a>

```python
scheduled_fleet_collection: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `scheduler_definition_id_input`<sup>Optional</sup> <a name="scheduler_definition_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionIdInput"></a>

```python
scheduler_definition_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.schedulerDefinitionId"></a>

```python
scheduler_definition_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  scheduler_definition_id: str,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId">scheduler_definition_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `scheduler_definition_id`<sup>Required</sup> <a name="scheduler_definition_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.schedulerDefinitionId"></a>

```python
scheduler_definition_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#scheduler_definition_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#compartment_id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#display_name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#filter DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#id DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#name DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#values DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition_scheduled_fleets#regex DataOciFleetAppsManagementSchedulerDefinitionScheduledFleets#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection()
```


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]]

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsFilter</a>]

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes">action_group_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes">application_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources">count_of_affected_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets">count_of_affected_targets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_group_types`<sup>Required</sup> <a name="action_group_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.actionGroupTypes"></a>

```python
action_group_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `application_types`<sup>Required</sup> <a name="application_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.applicationTypes"></a>

```python
application_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count_of_affected_resources`<sup>Required</sup> <a name="count_of_affected_resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```python
count_of_affected_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_targets`<sup>Required</sup> <a name="count_of_affected_targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```python
count_of_affected_targets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definition_scheduled_fleets

dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitionScheduledFleets.DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection">DataOciFleetAppsManagementSchedulerDefinitionScheduledFleetsScheduledFleetCollection</a>

---



