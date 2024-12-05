# `dataOciFleetAppsManagementFleetResources` Submodule <a name="`dataOciFleetAppsManagementFleetResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetResources <a name="DataOciFleetAppsManagementFleetResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources oci_fleet_apps_management_fleet_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]] = None,
  fleet_resource_type: str = None,
  id: str = None,
  state: str = None,
  tenancy_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetResourceType">fleet_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#filter DataOciFleetAppsManagementFleetResources#filter}

---

##### `fleet_resource_type`<sup>Optional</sup> <a name="fleet_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.fleetResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}.

---

##### `tenancy_id`<sup>Optional</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFleetResourceType">reset_fleet_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetTenancyId">reset_tenancy_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_fleet_resource_type` <a name="reset_fleet_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetFleetResourceType"></a>

```python
def reset_fleet_resource_type() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tenancy_id` <a name="reset_tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.resetTenancyId"></a>

```python
def reset_tenancy_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementFleetResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementFleetResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList">DataOciFleetAppsManagementFleetResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceCollection">fleet_resource_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceTypeInput">fleet_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceType">fleet_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filter"></a>

```python
filter: DataOciFleetAppsManagementFleetResourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList">DataOciFleetAppsManagementFleetResourcesFilterList</a>

---

##### `fleet_resource_collection`<sup>Required</sup> <a name="fleet_resource_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceCollection"></a>

```python
fleet_resource_collection: DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `fleet_resource_type_input`<sup>Optional</sup> <a name="fleet_resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceTypeInput"></a>

```python
fleet_resource_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `fleet_resource_type`<sup>Required</sup> <a name="fleet_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.fleetResourceType"></a>

```python
fleet_resource_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetResourcesConfig <a name="DataOciFleetAppsManagementFleetResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]] = None,
  fleet_resource_type: str = None,
  id: str = None,
  state: str = None,
  tenancy_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetResourceType">fleet_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_id DataOciFleetAppsManagementFleetResources#fleet_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#display_name DataOciFleetAppsManagementFleetResources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#filter DataOciFleetAppsManagementFleetResources#filter}

---

##### `fleet_resource_type`<sup>Optional</sup> <a name="fleet_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.fleetResourceType"></a>

```python
fleet_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#fleet_resource_type DataOciFleetAppsManagementFleetResources#fleet_resource_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#id DataOciFleetAppsManagementFleetResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#state DataOciFleetAppsManagementFleetResources#state}.

---

##### `tenancy_id`<sup>Optional</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#tenancy_id DataOciFleetAppsManagementFleetResources#tenancy_id}.

---

### DataOciFleetAppsManagementFleetResourcesFilter <a name="DataOciFleetAppsManagementFleetResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#name DataOciFleetAppsManagementFleetResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#values DataOciFleetAppsManagementFleetResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#regex DataOciFleetAppsManagementFleetResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#name DataOciFleetAppsManagementFleetResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#values DataOciFleetAppsManagementFleetResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_resources#regex DataOciFleetAppsManagementFleetResources#regex}.

---

### DataOciFleetAppsManagementFleetResourcesFleetResourceCollection <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection()
```


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetResourcesFilterList <a name="DataOciFleetAppsManagementFleetResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetResourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]]

---


### DataOciFleetAppsManagementFleetResourcesFilterOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementFleetResourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFilter">DataOciFleetAppsManagementFleetResourcesFilter</a>]

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.applicationType">application_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartment">compartment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.complianceState">compliance_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.environmentType">environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.product">product</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.productCount">product_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.targetCount">target_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyName">tenancy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_type`<sup>Required</sup> <a name="application_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.applicationType"></a>

```python
application_type: str
```

- *Type:* str

---

##### `compartment`<sup>Required</sup> <a name="compartment" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartment"></a>

```python
compartment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compliance_state`<sup>Required</sup> <a name="compliance_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.complianceState"></a>

```python
compliance_state: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `environment_type`<sup>Required</sup> <a name="environment_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.environmentType"></a>

```python
environment_type: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `product`<sup>Required</sup> <a name="product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.product"></a>

```python
product: str
```

- *Type:* str

---

##### `product_count`<sup>Required</sup> <a name="product_count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.productCount"></a>

```python
product_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_count`<sup>Required</sup> <a name="target_count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.targetCount"></a>

```python
target_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `tenancy_name`<sup>Required</sup> <a name="tenancy_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.tenancyName"></a>

```python
tenancy_name: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItems</a>

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference <a name="DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_resources

dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection">DataOciFleetAppsManagementFleetResourcesFleetResourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList">DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetResourcesFleetResourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetResources.DataOciFleetAppsManagementFleetResourcesFleetResourceCollection">DataOciFleetAppsManagementFleetResourcesFleetResourceCollection</a>

---



