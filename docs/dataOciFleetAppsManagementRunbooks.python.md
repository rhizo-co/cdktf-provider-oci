# `dataOciFleetAppsManagementRunbooks` Submodule <a name="`dataOciFleetAppsManagementRunbooks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementRunbooks <a name="DataOciFleetAppsManagementRunbooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks oci_fleet_apps_management_runbooks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks(
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
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]] = None,
  id: str = None,
  operation: str = None,
  platform: str = None,
  runbook_relevance: str = None,
  state: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.runbookRelevance">runbook_relevance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#filter DataOciFleetAppsManagementRunbooks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.operation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}.

---

##### `runbook_relevance`<sup>Optional</sup> <a name="runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.runbookRelevance"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOperation">reset_operation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetRunbookRelevance">reset_runbook_relevance</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_operation` <a name="reset_operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetOperation"></a>

```python
def reset_operation() -> None
```

##### `reset_platform` <a name="reset_platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_runbook_relevance` <a name="reset_runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetRunbookRelevance"></a>

```python
def reset_runbook_relevance() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementRunbooks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciFleetAppsManagementRunbooks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciFleetAppsManagementRunbooks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciFleetAppsManagementRunbooks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementRunbooks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList">DataOciFleetAppsManagementRunbooksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookCollection">runbook_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList">DataOciFleetAppsManagementRunbooksRunbookCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operationInput">operation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevanceInput">runbook_relevance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevance">runbook_relevance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filter"></a>

```python
filter: DataOciFleetAppsManagementRunbooksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList">DataOciFleetAppsManagementRunbooksFilterList</a>

---

##### `runbook_collection`<sup>Required</sup> <a name="runbook_collection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookCollection"></a>

```python
runbook_collection: DataOciFleetAppsManagementRunbooksRunbookCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList">DataOciFleetAppsManagementRunbooksRunbookCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `operation_input`<sup>Optional</sup> <a name="operation_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operationInput"></a>

```python
operation_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `runbook_relevance_input`<sup>Optional</sup> <a name="runbook_relevance_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevanceInput"></a>

```python
runbook_relevance_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `runbook_relevance`<sup>Required</sup> <a name="runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.runbookRelevance"></a>

```python
runbook_relevance: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementRunbooksConfig <a name="DataOciFleetAppsManagementRunbooksConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]] = None,
  id: str = None,
  operation: str = None,
  platform: str = None,
  runbook_relevance: str = None,
  state: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.operation">operation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.runbookRelevance">runbook_relevance</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#compartment_id DataOciFleetAppsManagementRunbooks#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#display_name DataOciFleetAppsManagementRunbooks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#filter DataOciFleetAppsManagementRunbooks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#id DataOciFleetAppsManagementRunbooks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.operation"></a>

```python
operation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#operation DataOciFleetAppsManagementRunbooks#operation}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#platform DataOciFleetAppsManagementRunbooks#platform}.

---

##### `runbook_relevance`<sup>Optional</sup> <a name="runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.runbookRelevance"></a>

```python
runbook_relevance: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#runbook_relevance DataOciFleetAppsManagementRunbooks#runbook_relevance}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#state DataOciFleetAppsManagementRunbooks#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#type DataOciFleetAppsManagementRunbooks#type}.

---

### DataOciFleetAppsManagementRunbooksFilter <a name="DataOciFleetAppsManagementRunbooksFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#name DataOciFleetAppsManagementRunbooks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#values DataOciFleetAppsManagementRunbooks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#regex DataOciFleetAppsManagementRunbooks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#name DataOciFleetAppsManagementRunbooks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#values DataOciFleetAppsManagementRunbooks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbooks#regex DataOciFleetAppsManagementRunbooks#regex}.

---

### DataOciFleetAppsManagementRunbooksRunbookCollection <a name="DataOciFleetAppsManagementRunbooksRunbookCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItems <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables()
```


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementRunbooksFilterList <a name="DataOciFleetAppsManagementRunbooksFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciFleetAppsManagementRunbooksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]]

---


### DataOciFleetAppsManagementRunbooksFilterOutputReference <a name="DataOciFleetAppsManagementRunbooksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciFleetAppsManagementRunbooksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksFilter">DataOciFleetAppsManagementRunbooksFilter</a>]

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.workflow">workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workflow`<sup>Required</sup> <a name="workflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.workflow"></a>

```python
workflow: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps">steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps"></a>

```python
steps: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflow</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps">steps</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `steps`<sup>Required</sup> <a name="steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps"></a>

```python
steps: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsWorkflowSteps</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.properties"></a>

```python
properties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroups</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.executionWorkflowDetails">execution_workflow_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.groups">groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_workflow_details`<sup>Required</sup> <a name="execution_workflow_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.executionWorkflowDetails"></a>

```python
execution_workflow_details: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsExecutionWorkflowDetailsList</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.groups"></a>

```python
groups: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsGroupsList</a>

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.tasks"></a>

```python
tasks: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociations</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.associationType">association_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.outputVariableMappings">output_variable_mappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepProperties">step_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.taskRecordDetails">task_record_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `association_type`<sup>Required</sup> <a name="association_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.associationType"></a>

```python
association_type: str
```

- *Type:* str

---

##### `output_variable_mappings`<sup>Required</sup> <a name="output_variable_mappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.outputVariableMappings"></a>

```python
output_variable_mappings: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList</a>

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `step_properties`<sup>Required</sup> <a name="step_properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.stepProperties"></a>

```python
step_properties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList</a>

---

##### `task_record_details`<sup>Required</sup> <a name="task_record_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.taskRecordDetails"></a>

```python
task_record_details: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasks</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails">output_variable_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `output_variable_details`<sup>Required</sup> <a name="output_variable_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails"></a>

```python
output_variable_details: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappings</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName">output_variable_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName">step_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `output_variable_name`<sup>Required</sup> <a name="output_variable_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName"></a>

```python
output_variable_name: str
```

- *Type:* str

---

##### `step_name`<sup>Required</sup> <a name="step_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName"></a>

```python
step_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksOutputVariableMappingsOutputVariableDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure">action_on_failure</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.runOn">run_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_on_failure`<sup>Required</sup> <a name="action_on_failure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure"></a>

```python
action_on_failure: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `run_on`<sup>Required</sup> <a name="run_on" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.runOn"></a>

```python
run_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksStepProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">checksum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```python
checksum: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content">content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```python
content: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `execution_type`<sup>Required</sup> <a name="execution_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```python
execution_type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```python
variables: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">input_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">output_variables</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `input_variables`<sup>Required</sup> <a name="input_variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```python
input_variables: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `output_variables`<sup>Required</sup> <a name="output_variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```python
output_variables: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails">execution_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled">is_copy_to_library_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId">task_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_details`<sup>Required</sup> <a name="execution_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails"></a>

```python
execution_details: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsExecutionDetailsList</a>

---

##### `is_copy_to_library_enabled`<sup>Required</sup> <a name="is_copy_to_library_enabled" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled"></a>

```python
is_copy_to_library_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.properties"></a>

```python
properties: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList</a>

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `task_record_id`<sup>Required</sup> <a name="task_record_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId"></a>

```python
task_record_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetails</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries">num_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `num_retries`<sup>Required</sup> <a name="num_retries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```python
num_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeout_in_seconds`<sup>Required</sup> <a name="timeout_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```python
timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsTasksTaskRecordDetailsProperties</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.associations">associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.estimatedTime">estimated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.isDefault">is_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.resourceRegion">resource_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.runbookRelevance">runbook_relevance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems">DataOciFleetAppsManagementRunbooksRunbookCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associations`<sup>Required</sup> <a name="associations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.associations"></a>

```python
associations: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsAssociationsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_time`<sup>Required</sup> <a name="estimated_time" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.estimatedTime"></a>

```python
estimated_time: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `resource_region`<sup>Required</sup> <a name="resource_region" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.resourceRegion"></a>

```python
resource_region: str
```

- *Type:* str

---

##### `runbook_relevance`<sup>Required</sup> <a name="runbook_relevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.runbookRelevance"></a>

```python
runbook_relevance: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItems">DataOciFleetAppsManagementRunbooksRunbookCollectionItems</a>

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionList <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference <a name="DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_fleet_apps_management_runbooks

dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection">DataOciFleetAppsManagementRunbooksRunbookCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.items"></a>

```python
items: DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList">DataOciFleetAppsManagementRunbooksRunbookCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciFleetAppsManagementRunbooksRunbookCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbooks.DataOciFleetAppsManagementRunbooksRunbookCollection">DataOciFleetAppsManagementRunbooksRunbookCollection</a>

---



