# `dataOciFleetAppsManagementSchedulerDefinitions` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinitions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinitions <a name="DataOciFleetAppsManagementSchedulerDefinitions" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions oci_fleet_apps_management_scheduler_definitions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]] = None,
  fleet_id: str = None,
  id: str = None,
  maintenance_window_id: str = None,
  product: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#filter DataOciFleetAppsManagementSchedulerDefinitions#filter}

---

##### `fleet_id`<sup>Optional</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_id`<sup>Optional</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.maintenanceWindowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.product"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId">reset_fleet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId">reset_maintenance_window_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct">reset_product</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fleet_id` <a name="reset_fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetFleetId"></a>

```python
def reset_fleet_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window_id` <a name="reset_maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetMaintenanceWindowId"></a>

```python
def reset_maintenance_window_id() -> None
```

##### `reset_product` <a name="reset_product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetProduct"></a>

```python
def reset_product() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinitions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinitions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementSchedulerDefinitions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinitions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection">scheduler_definition_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput">maintenance_window_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput">product_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filter"></a>

```python
filter: DataOciFleetAppsManagementSchedulerDefinitionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList">DataOciFleetAppsManagementSchedulerDefinitionsFilterList</a>

---

##### `scheduler_definition_collection`<sup>Required</sup> <a name="scheduler_definition_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.schedulerDefinitionCollection"></a>

```python
scheduler_definition_collection: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_window_id_input`<sup>Optional</sup> <a name="maintenance_window_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowIdInput"></a>

```python
maintenance_window_id_input: str
```

- *Type:* str

---

##### `product_input`<sup>Optional</sup> <a name="product_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.productInput"></a>

```python
product_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]] = None,
  fleet_id: str = None,
  id: str = None,
  maintenance_window_id: str = None,
  product: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product">product</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#compartment_id DataOciFleetAppsManagementSchedulerDefinitions#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#display_name DataOciFleetAppsManagementSchedulerDefinitions#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#filter DataOciFleetAppsManagementSchedulerDefinitions#filter}

---

##### `fleet_id`<sup>Optional</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#fleet_id DataOciFleetAppsManagementSchedulerDefinitions#fleet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#id DataOciFleetAppsManagementSchedulerDefinitions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window_id`<sup>Optional</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#maintenance_window_id DataOciFleetAppsManagementSchedulerDefinitions#maintenance_window_id}.

---

##### `product`<sup>Optional</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.product"></a>

```python
product: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#product DataOciFleetAppsManagementSchedulerDefinitions#product}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#state DataOciFleetAppsManagementSchedulerDefinitions#state}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsFilter <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#name DataOciFleetAppsManagementSchedulerDefinitions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#values DataOciFleetAppsManagementSchedulerDefinitions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definitions#regex DataOciFleetAppsManagementSchedulerDefinitions#regex}.

---

### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments()
```


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionsFilterList <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementSchedulerDefinitionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]]

---


### DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementSchedulerDefinitionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsFilter">DataOciFleetAppsManagementSchedulerDefinitionsFilter</a>]

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation">lifecycle_operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId">runbook_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects">subjects</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `lifecycle_operation`<sup>Required</sup> <a name="lifecycle_operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.lifecycleOperation"></a>

```python
lifecycle_operation: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `runbook_id`<sup>Required</sup> <a name="runbook_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.runbookId"></a>

```python
runbook_id: str
```

- *Type:* str

---

##### `subjects`<sup>Required</sup> <a name="subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.subjects"></a>

```python
subjects: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups">action_groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes">action_group_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff">activity_initiation_cut_off</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes">application_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups">count_of_affected_action_groups</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources">count_of_affected_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets">count_of_affected_targets</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations">lifecycle_operations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products">products</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks">run_books</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun">time_of_next_run</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_groups`<sup>Required</sup> <a name="action_groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroups"></a>

```python
action_groups: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsActionGroupsList</a>

---

##### `action_group_types`<sup>Required</sup> <a name="action_group_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.actionGroupTypes"></a>

```python
action_group_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `activity_initiation_cut_off`<sup>Required</sup> <a name="activity_initiation_cut_off" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.activityInitiationCutOff"></a>

```python
activity_initiation_cut_off: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `application_types`<sup>Required</sup> <a name="application_types" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.applicationTypes"></a>

```python
application_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `count_of_affected_action_groups`<sup>Required</sup> <a name="count_of_affected_action_groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedActionGroups"></a>

```python
count_of_affected_action_groups: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_resources`<sup>Required</sup> <a name="count_of_affected_resources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedResources"></a>

```python
count_of_affected_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `count_of_affected_targets`<sup>Required</sup> <a name="count_of_affected_targets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.countOfAffectedTargets"></a>

```python
count_of_affected_targets: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `lifecycle_operations`<sup>Required</sup> <a name="lifecycle_operations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.lifecycleOperations"></a>

```python
lifecycle_operations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `products`<sup>Required</sup> <a name="products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.products"></a>

```python
products: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `run_books`<sup>Required</sup> <a name="run_books" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.runBooks"></a>

```python
run_books: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.schedule"></a>

```python
schedule: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_of_next_run`<sup>Required</sup> <a name="time_of_next_run" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeOfNextRun"></a>

```python
time_of_next_run: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItems</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments">arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.arguments"></a>

```python
arguments: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersArgumentsList</a>

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters">input_parameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_parameters`<sup>Required</sup> <a name="input_parameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.inputParameters"></a>

```python
input_parameters: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksInputParametersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate">execution_startdate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId">maintenance_window_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences">recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `execution_startdate`<sup>Required</sup> <a name="execution_startdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.executionStartdate"></a>

```python
execution_startdate: str
```

- *Type:* str

---

##### `maintenance_window_id`<sup>Required</sup> <a name="maintenance_window_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.maintenanceWindowId"></a>

```python
maintenance_window_id: str
```

- *Type:* str

---

##### `recurrences`<sup>Required</sup> <a name="recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.recurrences"></a>

```python
recurrences: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsSchedule</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_scheduler_definitions

dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinitions.DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection">DataOciFleetAppsManagementSchedulerDefinitionsSchedulerDefinitionCollection</a>

---



