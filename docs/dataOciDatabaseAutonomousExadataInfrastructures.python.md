# `dataOciDatabaseAutonomousExadataInfrastructures` Submodule <a name="`dataOciDatabaseAutonomousExadataInfrastructures` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousExadataInfrastructures <a name="DataOciDatabaseAutonomousExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures oci_database_autonomous_exadata_infrastructures}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures(
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
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#filter DataOciDatabaseAutonomousExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructures resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousExadataInfrastructures resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseAutonomousExadataInfrastructures to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseAutonomousExadataInfrastructures that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousExadataInfrastructures to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.autonomousExadataInfrastructures">autonomous_exadata_infrastructures</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList">DataOciDatabaseAutonomousExadataInfrastructuresFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `autonomous_exadata_infrastructures`<sup>Required</sup> <a name="autonomous_exadata_infrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.autonomousExadataInfrastructures"></a>

```python
autonomous_exadata_infrastructures: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filter"></a>

```python
filter: DataOciDatabaseAutonomousExadataInfrastructuresFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList">DataOciDatabaseAutonomousExadataInfrastructuresFilterList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructures.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths()
```


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths()
```


### DataOciDatabaseAutonomousExadataInfrastructuresConfig <a name="DataOciDatabaseAutonomousExadataInfrastructuresConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#compartment_id DataOciDatabaseAutonomousExadataInfrastructures#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#availability_domain DataOciDatabaseAutonomousExadataInfrastructures#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#display_name DataOciDatabaseAutonomousExadataInfrastructures#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#filter DataOciDatabaseAutonomousExadataInfrastructures#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#id DataOciDatabaseAutonomousExadataInfrastructures#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#state DataOciDatabaseAutonomousExadataInfrastructures#state}.

---

### DataOciDatabaseAutonomousExadataInfrastructuresFilter <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#name DataOciDatabaseAutonomousExadataInfrastructures#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#values DataOciDatabaseAutonomousExadataInfrastructures#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#regex DataOciDatabaseAutonomousExadataInfrastructures#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#name DataOciDatabaseAutonomousExadataInfrastructures#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#values DataOciDatabaseAutonomousExadataInfrastructures#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_exadata_infrastructures#regex DataOciDatabaseAutonomousExadataInfrastructures#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.skipRu">skip_ru</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.months"></a>

```python
months: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsMonthsList</a>

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```python
skip_ru: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetails</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonths</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">is_monthly_patching_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu">skip_ru</a></code> | <code>cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_monthly_patching_enabled`<sup>Required</sup> <a name="is_monthly_patching_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```python
is_monthly_patching_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.months"></a>

```python
months: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowMonthsList</a>

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `skip_ru`<sup>Required</sup> <a name="skip_ru" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.skipRu"></a>

```python
skip_ru: BooleanList
```

- *Type:* cdktf.BooleanList

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindow</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.createAsync">create_async</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindowDetails">maintenance_window_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `create_async`<sup>Required</sup> <a name="create_async" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.createAsync"></a>

```python
create_async: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindow"></a>

```python
maintenance_window: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowList</a>

---

##### `maintenance_window_details`<sup>Required</sup> <a name="maintenance_window_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.maintenanceWindowDetails"></a>

```python
maintenance_window_details: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresMaintenanceWindowDetailsList</a>

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructuresOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures">DataOciDatabaseAutonomousExadataInfrastructuresAutonomousExadataInfrastructures</a>

---


### DataOciDatabaseAutonomousExadataInfrastructuresFilterList <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseAutonomousExadataInfrastructuresFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]]

---


### DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference <a name="DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_autonomous_exadata_infrastructures

dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseAutonomousExadataInfrastructuresFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousExadataInfrastructures.DataOciDatabaseAutonomousExadataInfrastructuresFilter">DataOciDatabaseAutonomousExadataInfrastructuresFilter</a>]

---



