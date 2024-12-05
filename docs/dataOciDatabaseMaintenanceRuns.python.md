# `dataOciDatabaseMaintenanceRuns` Submodule <a name="`dataOciDatabaseMaintenanceRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRuns <a name="DataOciDatabaseMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]] = None,
  id: str = None,
  maintenance_subtype: str = None,
  maintenance_type: str = None,
  state: str = None,
  target_resource_id: str = None,
  target_resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceType">maintenance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceType">target_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_subtype`<sup>Optional</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceSubtype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `maintenance_type`<sup>Optional</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype">reset_maintenance_subtype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType">reset_maintenance_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId">reset_target_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType">reset_target_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_subtype` <a name="reset_maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype"></a>

```python
def reset_maintenance_subtype() -> None
```

##### `reset_maintenance_type` <a name="reset_maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType"></a>

```python
def reset_maintenance_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_resource_id` <a name="reset_target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId"></a>

```python
def reset_target_resource_id() -> None
```

##### `reset_target_resource_type` <a name="reset_target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType"></a>

```python
def reset_target_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMaintenanceRuns to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMaintenanceRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns">maintenance_runs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput">maintenance_subtype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput">maintenance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter"></a>

```python
filter: DataOciDatabaseMaintenanceRunsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a>

---

##### `maintenance_runs`<sup>Required</sup> <a name="maintenance_runs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns"></a>

```python
maintenance_runs: DataOciDatabaseMaintenanceRunsMaintenanceRunsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_subtype_input`<sup>Optional</sup> <a name="maintenance_subtype_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput"></a>

```python
maintenance_subtype_input: str
```

- *Type:* str

---

##### `maintenance_type_input`<sup>Optional</sup> <a name="maintenance_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput"></a>

```python
maintenance_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_subtype`<sup>Required</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunsConfig <a name="DataOciDatabaseMaintenanceRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]] = None,
  id: str = None,
  maintenance_subtype: str = None,
  maintenance_type: str = None,
  state: str = None,
  target_resource_id: str = None,
  target_resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_subtype`<sup>Optional</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `maintenance_type`<sup>Optional</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunsFilter <a name="DataOciDatabaseMaintenanceRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}.

---

### DataOciDatabaseMaintenanceRunsMaintenanceRuns <a name="DataOciDatabaseMaintenanceRunsMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns()
```


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunsFilterList <a name="DataOciDatabaseMaintenanceRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]]

---


### DataOciDatabaseMaintenanceRunsFilterOutputReference <a name="DataOciDatabaseMaintenanceRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseMaintenanceRunsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>]

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimated_db_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimated_network_switches_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimated_storage_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">total_estimated_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_db_server_patching_time`<sup>Required</sup> <a name="estimated_db_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```python
estimated_db_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_network_switches_patching_time`<sup>Required</sup> <a name="estimated_network_switches_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```python
estimated_network_switches_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_storage_server_patching_time`<sup>Required</sup> <a name="estimated_storage_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```python
estimated_storage_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimated_patching_time`<sup>Required</sup> <a name="total_estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```python
total_estimated_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_runs

dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins">current_custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent">current_patching_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime">estimated_component_patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime">estimated_patching_time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled">is_dst_file_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount">patch_failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId">patch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime">patching_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime">patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType">patch_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId">peer_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion">target_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion">target_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `current_custom_action_timeout_in_mins`<sup>Required</sup> <a name="current_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```python
current_custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_patching_component`<sup>Required</sup> <a name="current_patching_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent"></a>

```python
current_patching_component: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_component_patching_start_time`<sup>Required</sup> <a name="estimated_component_patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```python
estimated_component_patching_start_time: str
```

- *Type:* str

---

##### `estimated_patching_time`<sup>Required</sup> <a name="estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime"></a>

```python
estimated_patching_time: DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dst_file_update_enabled`<sup>Required</sup> <a name="is_dst_file_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled"></a>

```python
is_dst_file_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_subtype`<sup>Required</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `patch_failure_count`<sup>Required</sup> <a name="patch_failure_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount"></a>

```python
patch_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_id`<sup>Required</sup> <a name="patch_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId"></a>

```python
patch_id: str
```

- *Type:* str

---

##### `patching_end_time`<sup>Required</sup> <a name="patching_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime"></a>

```python
patching_end_time: str
```

- *Type:* str

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `patching_start_time`<sup>Required</sup> <a name="patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime"></a>

```python
patching_start_time: str
```

- *Type:* str

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `patch_type`<sup>Required</sup> <a name="patch_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType"></a>

```python
patch_type: str
```

- *Type:* str

---

##### `peer_maintenance_run_id`<sup>Required</sup> <a name="peer_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId"></a>

```python
peer_maintenance_run_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_db_server_version`<sup>Required</sup> <a name="target_db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion"></a>

```python
target_db_server_version: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_storage_server_version`<sup>Required</sup> <a name="target_storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion"></a>

```python
target_storage_server_version: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunsMaintenanceRuns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a>

---



