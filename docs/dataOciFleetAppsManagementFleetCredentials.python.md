# `dataOciFleetAppsManagementFleetCredentials` Submodule <a name="`dataOciFleetAppsManagementFleetCredentials` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementFleetCredentials <a name="DataOciFleetAppsManagementFleetCredentials" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials oci_fleet_apps_management_fleet_credentials}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials(
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
  compartment_id: str = None,
  credential_level: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#fleet_id DataOciFleetAppsManagementFleetCredentials#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#compartment_id DataOciFleetAppsManagementFleetCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.credentialLevel">credential_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#credential_level DataOciFleetAppsManagementFleetCredentials#credential_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#display_name DataOciFleetAppsManagementFleetCredentials#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#id DataOciFleetAppsManagementFleetCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#state DataOciFleetAppsManagementFleetCredentials#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#fleet_id DataOciFleetAppsManagementFleetCredentials#fleet_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#compartment_id DataOciFleetAppsManagementFleetCredentials#compartment_id}.

---

##### `credential_level`<sup>Optional</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.credentialLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#credential_level DataOciFleetAppsManagementFleetCredentials#credential_level}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#display_name DataOciFleetAppsManagementFleetCredentials#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#filter DataOciFleetAppsManagementFleetCredentials#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#id DataOciFleetAppsManagementFleetCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#state DataOciFleetAppsManagementFleetCredentials#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetCredentialLevel">reset_credential_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_credential_level` <a name="reset_credential_level" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetCredentialLevel"></a>

```python
def reset_credential_level() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementFleetCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementFleetCredentials resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementFleetCredentials to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementFleetCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementFleetCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList">DataOciFleetAppsManagementFleetCredentialsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetCredentialCollection">fleet_credential_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.credentialLevelInput">credential_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.credentialLevel">credential_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.filter"></a>

```python
filter: DataOciFleetAppsManagementFleetCredentialsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList">DataOciFleetAppsManagementFleetCredentialsFilterList</a>

---

##### `fleet_credential_collection`<sup>Required</sup> <a name="fleet_credential_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetCredentialCollection"></a>

```python
fleet_credential_collection: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `credential_level_input`<sup>Optional</sup> <a name="credential_level_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.credentialLevelInput"></a>

```python
credential_level_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `credential_level`<sup>Required</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.credentialLevel"></a>

```python
credential_level: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentials.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementFleetCredentialsConfig <a name="DataOciFleetAppsManagementFleetCredentialsConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  compartment_id: str = None,
  credential_level: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#fleet_id DataOciFleetAppsManagementFleetCredentials#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#compartment_id DataOciFleetAppsManagementFleetCredentials#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.credentialLevel">credential_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#credential_level DataOciFleetAppsManagementFleetCredentials#credential_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#display_name DataOciFleetAppsManagementFleetCredentials#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#id DataOciFleetAppsManagementFleetCredentials#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#state DataOciFleetAppsManagementFleetCredentials#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#fleet_id DataOciFleetAppsManagementFleetCredentials#fleet_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#compartment_id DataOciFleetAppsManagementFleetCredentials#compartment_id}.

---

##### `credential_level`<sup>Optional</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.credentialLevel"></a>

```python
credential_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#credential_level DataOciFleetAppsManagementFleetCredentials#credential_level}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#display_name DataOciFleetAppsManagementFleetCredentials#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#filter DataOciFleetAppsManagementFleetCredentials#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#id DataOciFleetAppsManagementFleetCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#state DataOciFleetAppsManagementFleetCredentials#state}.

---

### DataOciFleetAppsManagementFleetCredentialsFilter <a name="DataOciFleetAppsManagementFleetCredentialsFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#name DataOciFleetAppsManagementFleetCredentials#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#values DataOciFleetAppsManagementFleetCredentials#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#regex DataOciFleetAppsManagementFleetCredentials#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#name DataOciFleetAppsManagementFleetCredentials#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#values DataOciFleetAppsManagementFleetCredentials#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_fleet_credentials#regex DataOciFleetAppsManagementFleetCredentials#regex}.

---

### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection()
```


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems()
```


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics()
```


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword()
```


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementFleetCredentialsFilterList <a name="DataOciFleetAppsManagementFleetCredentialsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementFleetCredentialsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]]

---


### DataOciFleetAppsManagementFleetCredentialsFilterOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementFleetCredentialsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFilter">DataOciFleetAppsManagementFleetCredentialsFilter</a>]

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.credentialLevel">credential_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.target">target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_level`<sup>Required</sup> <a name="credential_level" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.credentialLevel"></a>

```python
credential_level: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.target"></a>

```python
target: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecifics</a>

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.entitySpecifics">entity_specifics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.password">password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.user">user</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entity_specifics`<sup>Required</sup> <a name="entity_specifics" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.entitySpecifics"></a>

```python
entity_specifics: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsEntitySpecificsList</a>

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.password"></a>

```python
password: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.user"></a>

```python
user: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItems</a>

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPasswordOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsPassword</a>

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.keyVersion">key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.secretId">secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.secretVersion">secret_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `key_version`<sup>Required</sup> <a name="key_version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.keyVersion"></a>

```python
key_version: str
```

- *Type:* str

---

##### `secret_id`<sup>Required</sup> <a name="secret_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.secretId"></a>

```python
secret_id: str
```

- *Type:* str

---

##### `secret_version`<sup>Required</sup> <a name="secret_version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.secretVersion"></a>

```python
secret_version: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUserOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsUser</a>

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference <a name="DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_fleet_credentials

dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementFleetCredentials.DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection">DataOciFleetAppsManagementFleetCredentialsFleetCredentialCollection</a>

---



